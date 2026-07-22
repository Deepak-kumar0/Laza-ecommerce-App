const { execFileSync } = require('child_process');
const path = require('path');

const androidHome = process.env.ANDROID_HOME || 'C:\\Users\\hiii\\AppData\\Local\\Android\\Sdk';
const adbPath = path.join(androidHome, 'platform-tools', process.platform === 'win32' ? 'adb.exe' : 'adb');
const emulatorPath = path.join(androidHome, 'emulator', process.platform === 'win32' ? 'emulator.exe' : 'emulator');

function run(command, args, options = {}) {
  return execFileSync(command, args, { stdio: 'pipe', encoding: 'utf8', ...options });
}

function isDeviceOnline() {
  try {
    const output = run(adbPath, ['devices']);
    return output.split('\n').some((line) => line.includes('emulator-5554') && line.includes('device'));
  } catch {
    return false;
  }
}

function waitForDevice(timeoutMs = 180000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (isDeviceOnline()) {
      return true;
    }
    try {
      run(adbPath, ['wait-for-device']);
    } catch {}
    if (isDeviceOnline()) {
      return true;
    }
    require('child_process').execFileSync('powershell', ['-NoProfile', '-Command', 'Start-Sleep -Seconds 3']);
  }
  return false;
}

function ensureEmulator() {
  try {
    const output = run(adbPath, ['devices']);
    if (output.includes('emulator-5554') && output.includes('device')) {
      console.log('Emulator already online.');
      return;
    }
  } catch {}

  try {
    run(emulatorPath, ['-avd', 'Pixel_6', '-no-snapshot-load', '-no-boot-anim', '-read-only']);
  } catch {
    // ignore launch errors; the waiting logic will verify state
  }

  const ready = waitForDevice();
  if (!ready) {
    console.error('Emulator did not become ready in time.');
    process.exit(1);
  }
}

ensureEmulator();
