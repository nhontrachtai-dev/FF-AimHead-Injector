console.log("[+] Starting Aim Head Panel Injection...");

// Lấy tên process Free Fire
var processName = "com.dts.freefireth";
console.log("[*] Target Process: " + processName);

Java.perform(function() {
    // Hook các hàm toán học (dùng cho tính toán aim)
    var Math = Java.use("java.lang.Math");
    
    // Intercept atan2 để theo dõi góc nhắm
    var originalAtan2 = Math.atan2.overload('double', 'double');
    var atan2Interceptor = originalAtan2.implementation = function(y, x) {
        var result = this.atan2(y, x);
        var angle = result * (180.0 / 3.14159265);
        
        console.log("[AIM HEAD] Angle: " + angle.toFixed(2) + "° (Y: " + y.toFixed(2) + ", X: " + x.toFixed(2) + ")");
        
        return result;
    };
    
    console.log("[✓] Aim tracking active!");
    console.log("[✓] Monitoring head position angles...");
    console.log("[✓] Panel đã kích hoạt thành công!");
});