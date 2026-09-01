#!/bin/bash

echo ""
echo "========================================"
echo "  Free Fire Aim Head Panel Injector"
echo "  (BlueStacks 5)"
echo "========================================"
echo ""

echo "[*] Checking ADB connection..."
adb devices

echo ""
echo "[*] Connecting to BlueStacks 5..."
adb connect 127.0.0.1:5555

echo ""
echo "[*] Waiting for Free Fire to start..."
echo "    Please make sure Free Fire is running on BlueStacks!"
read -p "Press Enter to continue..."

echo ""
echo "[+] Injecting Aim Head Panel..."
echo "[+] This may take a few seconds..."
echo ""

frida -U -f com.dts.freefireth -l aimhead.js --no-pause

echo ""
echo "[✓] Injection complete!"
echo "[✓] Monitor console for aim head data"