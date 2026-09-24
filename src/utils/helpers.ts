/**
 * Audio Synthesizer via Web Audio API for futuristic interactive sound effects
 */
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playCyberSound(type: 'click' | 'hover' | 'success' | 'secret' | 'toggle', soundEnabled = true) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.07);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'secret') {
      // Futuristic cyber chord
      const freqs = [330, 440, 554.37, 659.25, 880, 1108.73];
      freqs.forEach((f, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(f, now + idx * 0.06);
        g.gain.setValueAtTime(0.03, now + idx * 0.06);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(now + idx * 0.06);
        o.stop(now + 0.8);
      });
    } else if (type === 'toggle') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (err) {
    // Ignore audio autoplay restrictions gracefully
    console.debug('Web Audio not triggered', err);
  }
}

/**
 * Generate and trigger vCard (.vcf) contact card download
 */
export function downloadVCard() {
  const vcardContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:M D Jihadul Islam Sojib',
    'N:Sojib;M D Jihadul Islam;;;',
    'NICKNAME:ZihaD',
    'TITLE:Digital Creator | E-Commerce Enthusiast | AI & Digital Specialist',
    'TEL;TYPE=CELL,VOICE:+8801893665896',
    'EMAIL;TYPE=INTERNET,PREF:mdjehadulislam935@gmail.com',
    'URL:https://Jihadulislam.com',
    'ADR;TYPE=WORK:;;Gazaria Bazar, Fulgazi-3942;Feni;;;Bangladesh',
    'NOTE:Turning Ideas Into Digital Experiences. Web Designer & Digital Creator',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'MD_Jihadul_Islam_Sojib_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Share profile helper with Web Share API and fallback
 */
export async function shareProfile(title: string, text: string, url: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url
      });
      return true;
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        return copyTextFallback(url);
      }
      return false;
    }
  } else {
    return copyTextFallback(url);
  }
}

async function copyTextFallback(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  }
}
