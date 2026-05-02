import type { SensorData, AnalysisData } from '../types';

export async function fetchSensors(): Promise<SensorData> {
    const res = await fetch('/api/sensors');
    if (!res.ok) throw new Error(`Sensors error: ${res.status}`);
    return res.json();
}

export async function fetchAnalysis(): Promise<AnalysisData | null> {
    try {
        const res = await fetch('/api/analysis');
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export async function fetchLogs(): Promise<string[]> {
    const res = await fetch('/api/logs');
    if (!res.ok) throw new Error(`Logs error: ${res.status}`);
    return res.json();
}

export async function fetchImage(): Promise<string> {
    return `/api/image?t=${Date.now()}`;
}

export async function sendCommand(cmd: object): Promise<boolean> {
    const res = await fetch('/api/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cmd),
    });
    return res.ok;
}
