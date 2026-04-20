import { useState } from 'preact/hooks';
import type { ControlState } from '../types';
import { sendCommand } from '../api/client';

const CONTROLS: ControlState[] = [
  { id: 'co2', label: 'CO2', on: false, auto: true },
  { id: 'heater', label: 'Обогрев', on: false, auto: true },
  { id: 'cooler', label: 'Охлаждение', on: false, auto: true },
  { id: 'humidifier', label: 'Увлажнитель', on: false, auto: true },
  { id: 'dehumidifier', label: 'Осушитель', on: false, auto: true },
  { id: 'light', label: 'Свет', on: true, auto: true },
];

export function ControlsPanel() {
  const [states, setStates] = useState<ControlState[]>(CONTROLS);

  const toggle = async (id: string) => {
    const ctrl = states.find(c => c.id === id);
    if (!ctrl) return;

    const newOn = !ctrl.on;
    
    setStates(prev => prev.map(c => 
      c.id === id ? { ...c, on: newOn } : c
    ));

    try {
      await sendCommand({ type: 'set_output', id, on: newOn });
    } catch {
      setStates(prev => prev.map(c => 
        c.id === id ? { ...c, on: !newOn } : c
      ));
    }
  };

  return (
    <aside class="panel">
      <h2>Управление</h2>
      
      {states.map(ctrl => (
        <div class="control-card" key={ctrl.id}>
          <div class="control-header">
            <span>{ctrl.label}</span>
            <button
              class={`toggle ${ctrl.on ? 'on' : ''}`}
              onClick={() => toggle(ctrl.id)}
              aria-label={`Toggle ${ctrl.label}`}
            />
          </div>
          {ctrl.auto && (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              AUTO
            </span>
          )}
        </div>
      ))}
    </aside>
  );
}