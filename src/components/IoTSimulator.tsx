"use client";

import { useState, useEffect, useRef } from "react";
import { Radio, Power, Droplet, Thermometer, Cpu, Send } from "lucide-react";

interface LogMessage {
  time: string;
  type: "publish" | "subscribe";
  topic: string;
  payload: string;
}

export default function IoTSimulator() {
  const [activeTab, setActiveTab] = useState<"diesel" | "ac" | "ir">("diesel");
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Diesel Tank State
  const [dieselLevel, setDieselLevel] = useState(68);

  // AC State
  const [acTemp, setAcTemp] = useState(23);
  const [acPower, setAcPower] = useState(true);

  // IR Blaster State
  const [irDevice, setIrDevice] = useState("Living Room TV");
  const [irCommand, setIrCommand] = useState("POWER");

  // Helper to add logs
  const addLog = (type: "publish" | "subscribe", topic: string, payload: object) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");
    const newLog: LogMessage = {
      time: timeStr,
      type,
      topic,
      payload: JSON.stringify(payload),
    };
    setLogs((prev) => [...prev.slice(-30), newLog]); // Keep last 30 logs
  };

  // Scroll logs to bottom
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Initial simulation logs
  useEffect(() => {
    addLog("subscribe", "sustainabyte/alerts/critical", { status: "OK", node: "central-broker" });
    
    // Periodically simulate background subscriptions (live device checking in)
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 5) - 2; // -2 to +2 variation
      if (activeTab === "diesel") {
        setDieselLevel((prev) => {
          const next = Math.max(0, Math.min(100, prev + randomValue * 0.2));
          addLog("subscribe", "sustainabyte/diesel/tank/telemetry", {
            level: parseFloat(next.toFixed(1)),
            temperature: 31.4,
            status: "normal",
          });
          return parseFloat(next.toFixed(1));
        });
      } else if (activeTab === "ac" && acPower) {
        addLog("subscribe", "sustainabyte/ac/telemetry", {
          current_temp: acTemp + (Math.random() * 0.4 - 0.2),
          target_temp: acTemp,
          mode: "COOL",
          fan_speed: "AUTO",
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [activeTab, acTemp, acPower]);

  // Publish diesel changes
  const handleDieselChange = (val: number) => {
    setDieselLevel(val);
    addLog("publish", "sustainabyte/diesel/tank/level", {
      level: val,
      unit: "percent",
      volume_liters: Math.round(val * 50), // 5000L tank
      timestamp: Date.now(),
    });
  };

  // Publish AC changes
  const handleAcTempChange = (val: number) => {
    setAcTemp(val);
    addLog("publish", "sustainabyte/ac/temperature/set", {
      temperature: val,
      power: acPower ? "ON" : "OFF",
      timestamp: Date.now(),
    });
  };

  const handleAcPowerToggle = () => {
    const nextState = !acPower;
    setAcPower(nextState);
    addLog("publish", "sustainabyte/ac/power/toggle", {
      power: nextState ? "ON" : "OFF",
      target_temperature: acTemp,
      timestamp: Date.now(),
    });
  };

  // Publish IR command
  const sendIrCommand = (command: string) => {
    setIrCommand(command);
    addLog("publish", `sustainabyte/irblaster/send`, {
      device: irDevice,
      command: command,
      protocol: "NEC",
      frequency_khz: 38,
      timestamp: Date.now(),
    });
  };

  return (
    <section className="iot-section" id="iot-simulator">
      <div
        className="glow-blob"
        style={{
          top: "30%",
          left: "50%",
          width: "600px",
          height: "600px",
          backgroundColor: "rgba(99, 102, 241, 0.05)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="container">
        <div className="section-eyebrow">Interactive Demo</div>
        <h2 className="section-title">Live IoT & MQTT Simulator</h2>
        <p className="section-subtitle">
          Experience real-time publish & subscribe events. Toggle parameters below to see how payloads are formatted and published to the local broker.
        </p>

        <div className="iot-layout-grid">
          {/* Left panel: Controls */}
          <div className="glass iot-device-panel">
            <div className="iot-device-tabs">
              <button
                className={`iot-device-tab ${activeTab === "diesel" ? "active" : ""}`}
                onClick={() => setActiveTab("diesel")}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Droplet size={15} /> Diesel Tank
                </span>
              </button>
              <button
                className={`iot-device-tab ${activeTab === "ac" ? "active" : ""}`}
                onClick={() => setActiveTab("ac")}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Thermometer size={15} /> AC Controller
                </span>
              </button>
              <button
                className={`iot-device-tab ${activeTab === "ir" ? "active" : ""}`}
                onClick={() => setActiveTab("ir")}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Cpu size={15} /> IR Blaster
                </span>
              </button>
            </div>

            <div className="iot-control-area">
              {/* Tab 1: Diesel Tank */}
              {activeTab === "diesel" && (
                <>
                  <div className="iot-control-header">
                    <h3 className="iot-device-title-sub">Diesel Tank Monitoring</h3>
                    <span className="iot-live-pulse">
                      <span className="nav-badge-pulse" style={{ backgroundColor: "#10B981" }} /> Live Level
                    </span>
                  </div>

                  <div className="iot-control-widgets">
                    <div className="slider-container">
                      <div className="slider-header">
                        <span>Adjust Tank Capacity</span>
                        <span className="mono" style={{ color: "var(--secondary)", fontWeight: "bold" }}>
                          {dieselLevel}% ({Math.round(dieselLevel * 50)} / 5000 Liters)
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={dieselLevel}
                        onChange={(e) => handleDieselChange(parseInt(e.target.value))}
                        className="slider-input"
                      />
                    </div>

                    <div className="tank-visualizer">
                      <div
                        className="tank-water"
                        style={{ height: `${dieselLevel}%` }}
                      >
                        <div className="tank-water-wave" />
                      </div>
                      <div className="tank-percentage">{Math.round(dieselLevel)}%</div>
                    </div>
                  </div>
                </>
              )}

              {/* Tab 2: AC Controller */}
              {activeTab === "ac" && (
                <>
                  <div className="iot-control-header">
                    <h3 className="iot-device-title-sub">AC Controller Panel</h3>
                    <span className="iot-live-pulse" style={{ color: acPower ? "#10B981" : "#EF4444" }}>
                      <span
                        className="nav-badge-pulse"
                        style={{ backgroundColor: acPower ? "#10B981" : "#EF4444" }}
                      />{" "}
                      {acPower ? "DEVICE ONLINE" : "DEVICE STANDBY"}
                    </span>
                  </div>

                  <div className="iot-control-widgets">
                    <div className="toggle-container">
                      <span className="toggle-label">System Power Status</span>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={acPower}
                          onChange={handleAcPowerToggle}
                        />
                        <span className="toggle-slider" />
                      </label>
                    </div>

                    <div className="slider-container" style={{ opacity: acPower ? 1 : 0.4, transition: "opacity 0.3s" }}>
                      <div className="slider-header">
                        <span>Set Target Temperature</span>
                        <span className="mono" style={{ color: "var(--primary)", fontWeight: "bold" }}>
                          {acTemp}°C
                        </span>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="30"
                        disabled={!acPower}
                        value={acTemp}
                        onChange={(e) => handleAcTempChange(parseInt(e.target.value))}
                        className="slider-input"
                        style={{ background: `linear-gradient(90deg, #3b82f6 ${((acTemp - 16) / 14) * 100}%, rgba(255,255,255,0.1) 0%)` }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "1.25rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        opacity: acPower ? 1 : 0.4,
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Fan Mode</div>
                        <div className="mono" style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--white)", marginTop: "4px" }}>AUTO SPEED</div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Swing Direction</div>
                        <div className="mono" style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--white)", marginTop: "4px" }}>VERTICAL WIDE</div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Tab 3: IR Blaster */}
              {activeTab === "ir" && (
                <>
                  <div className="iot-control-header">
                    <h3 className="iot-device-title-sub">IR Blaster Command Hub</h3>
                    <span className="iot-live-pulse">
                      <span className="nav-badge-pulse" style={{ backgroundColor: "#10B981" }} /> Ready
                    </span>
                  </div>

                  <div className="iot-control-widgets">
                    <div className="slider-container" style={{ marginBottom: "0.5rem" }}>
                      <span className="slider-header" style={{ fontSize: "0.75rem" }}>Target Control Device</span>
                      <select
                        value={irDevice}
                        onChange={(e) => setIrDevice(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "var(--radius-sm)",
                          color: "var(--white)",
                          fontSize: "0.85rem",
                          outline: "none",
                        }}
                      >
                        <option value="Living Room TV">Living Room Smart TV (LG)</option>
                        <option value="Master Bedroom Projector">Master Bedroom Projector (Epson)</option>
                        <option value="Dining Room Soundbar">Dining Room Soundbar (Sony)</option>
                        <option value="Conference Room AC">Conference Room AC (Daikin)</option>
                      </select>
                    </div>

                    <div className="ir-buttons-grid">
                      <button className="ir-btn" onClick={() => sendIrCommand("POWER")}>
                        <Power size={18} style={{ color: "#EF4444" }} />
                        <span>Power</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("VOLUME_UP")}>
                        <span>Vol +</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("CHANNEL_UP")}>
                        <span>Ch +</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("MUTE")}>
                        <span>Mute</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("VOLUME_DOWN")}>
                        <span>Vol -</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("CHANNEL_DOWN")}>
                        <span>Ch -</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("INPUT_SOURCE")}>
                        <span>Source</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("MENU")}>
                        <span>Menu</span>
                      </button>
                      <button className="ir-btn" onClick={() => sendIrCommand("OK_ENTER")}>
                        <span>Select</span>
                      </button>
                    </div>

                    {irCommand && (
                      <div
                        className="mono"
                        style={{
                          fontSize: "0.72rem",
                          textAlign: "center",
                          color: "var(--text-secondary)",
                          background: "rgba(255, 255, 255, 0.01)",
                          padding: "6px",
                          borderRadius: "4px",
                        }}
                      >
                        Last Sent IR Command: <span style={{ color: "var(--secondary)", fontWeight: "bold" }}>{irCommand}</span> to {irDevice}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right panel: MQTT Console */}
          <div className="glass mqtt-dashboard-console">
            <div className="mqtt-console-header">
              <div className="mqtt-console-title">
                <Radio size={14} className="animate-pulse" style={{ color: "var(--primary)" }} />
                <span>MQTT Client Console</span>
              </div>
              <div className="mqtt-connection-indicator">
                <span className="nav-badge-pulse" style={{ backgroundColor: "var(--secondary)" }} />
                <span>broker.hivemq.com:1883</span>
              </div>
            </div>

            <div className="mqtt-console-logs">
              {logs.length === 0 ? (
                <div style={{ margin: "auto", textAlign: "center", color: "var(--text-muted)" }}>
                  <Radio size={32} style={{ marginBottom: "8px", opacity: 0.3 }} />
                  <div>Awaiting MQTT messages...</div>
                  <div style={{ fontSize: "0.68rem", marginTop: "4px" }}>Interact with the controls to publish telemetry</div>
                </div>
              ) : (
                logs.map((log, idx) => (
                  <div key={idx} className={`console-log-row ${log.type}`}>
                    <div className="log-meta">
                      <span>[{log.time}]</span>
                      <span
                        style={{
                          color: log.type === "publish" ? "var(--secondary)" : "var(--primary)",
                          fontWeight: "bold",
                        }}
                      >
                        {log.type.toUpperCase()}
                      </span>
                      <span>topic:</span>
                      <span className="log-topic">{log.topic}</span>
                    </div>
                    <div className="log-payload">{log.payload}</div>
                  </div>
                ))
              )}
              <div ref={consoleEndRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
