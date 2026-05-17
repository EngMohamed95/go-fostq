@echo off
chcp 65001 > nul
echo ===================================================
echo [فستق للتسويق] جاري تهيئة ورفع الكود إلى GitHub...
echo ===================================================

:: تهيئة Git
git init

:: إضافة المستودع
git remote add origin git@github.com:EngMohamed95/go-fostq.git 2>nul
if %errorlevel% neq 0 (
    echo [تنبيه] المستودع مضاف مسبقاً، جاري تحديث الرابط...
    git remote set-url origin git@github.com:EngMohamed95/go-fostq.git
)

:: إضافة الملفات
echo [1/3] جاري تجهيز الملفات (git add)...
git add .

:: حفظ التعديلات
echo [2/3] جاري حفظ التعديلات باللوجو الجديد والألوان المتناسقة...
git commit -m "feat: update brand logo and theme colors to match the new logo"

:: تحديد الفرع الرئيسي
git branch -M main

:: الرفع إلى GitHub
echo [3/3] جاري رفع الكود إلى GitHub (git push)...
git push -u origin main

if %errorlevel% equ 0 (
    echo ===================================================
    echo [نجاح] تم رفع الكود بالكامل إلى GitHub بنجاح! 🎉
    echo ===================================================
) else (
    echo ===================================================
    echo [خطأ] فشل الرفع. يرجى التأكد من إعدادات الـ SSH وصلاحيات الحساب.
    echo ===================================================
)

pause
