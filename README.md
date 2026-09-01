# Free Fire Aim Head Panel Injector

Công cụ inject chức năng định vị aim head vào Free Fire trên BlueStacks 5.

## 📋 Yêu cầu

- **BlueStacks 5** (hoặc mới hơn)
- **Free Fire** cài trên BlueStacks
- **Python 3.x**
- **ADB** (Android Debug Bridge)
- **Frida** + **Frida Tools**

## 🚀 Cài đặt

### 1. Cài Python (nếu chưa có)
Download từ: https://www.python.org/downloads/

### 2. Cài ADB
```bash
# Windows: Download từ Android SDK Platform Tools
# https://developer.android.com/studio/releases/platform-tools

# macOS:
brew install android-platform-tools

# Linux:
sudo apt-get install android-tools-adb
```

### 3. Cài Frida
```bash
pip install frida frida-tools
```

## ⚙️ Sử dụng

### Bước 1: Kích hoạt Developer Mode trên BlueStacks
1. Mở BlueStacks 5
2. Vào **Settings** > **About**
3. Tap **Build Number** 7 lần
4. Vào **Settings** > **Developer Options**
5. Bật **USB Debugging**

### Bước 2: Kết nối ADB
```bash
adb connect 127.0.0.1:5555
adb devices
```

### Bước 3: Chạy Injector

**Windows:**
```bash
injector.bat
```

**Linux/Mac:**
```bash
chmod +x inject.sh
./inject.sh
```

**Manual:**
```bash
frida -U -f com.dts.freefireth -l aimhead.js --no-pause
```

## 📊 Output

Sau khi inject thành công, bạn sẽ thấy:
```
[+] Starting Aim Head Panel Injection...
[*] Target Process: com.dts.freefireth
[✓] Aim tracking active!
[✓] Monitoring head position angles...
[✓] Panel đã kích hoạt thành công!
[AIM HEAD] Angle: 45.50° (Y: 1.23, X: 2.45)
[AIM HEAD] Angle: 42.30° (Y: 1.15, X: 2.67)
```

## 🔧 Troubleshooting

### Lỗi: "frida: command not found"
```bash
pip install frida frida-tools
```

### Lỗi: "adb: command not found"
- Download Android SDK Platform Tools
- Add đường dẫn vào PATH

### Lỗi: "unable to connect to 127.0.0.1:5555"
- Kiểm tra BlueStacks có chạy không
- Tắt BlueStacks, mở lại, thử lại

### Lỗi: "Process not found: com.dts.freefireth"
- Chắc chắn Free Fire đã chạy trên BlueStacks
- Chờ app load đầy đủ rồi inject

## 📝 Ghi chú

- Script này chỉ hoạt động trên BlueStacks 5+
- Cần bật USB Debugging
- Free Fire phải đang chạy khi inject
- Có thể cần chạy với quyền admin (Windows)

## 🔗 Files

- `aimhead.js` - Frida script cho injection
- `inject.bat` - Script tự động cho Windows
- `inject.sh` - Script tự động cho Linux/Mac
- `README.md` - Hướng dẫn này

---

**Made with ❤️ for Free Fire Players**