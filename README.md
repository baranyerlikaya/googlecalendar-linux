# Google Calendar Linux Desktop Application

**ENGLISH**

## Overview
This project provides a simple, lightweight desktop application for accessing Google Calendar on Linux. Built with Electron, it supports both `.deb` and `.AppImage` installation formats.

## Installation

### Requirements
- Linux (Ubuntu or other Debian-based distributions recommended)
- Installed Docker (for building)

### Steps
1. Download the `.deb` or `.AppImage` file from the `dist/` folder.
2. To install the `.deb` file, run the following command:

   ```bash
   sudo dpkg -i dist/gcalendar-linux_1.0.0_amd64.deb
   ```

3. For the `.AppImage` file, make it executable and run:

   ```bash
   chmod +x dist/Google\ Calendar-1.0.0.AppImage
   ./dist/Google\ Calendar-1.0.0.AppImage
   ```

## Usage
After installation, you can find the application in your applications menu as "Google Calendar." Simply open and enjoy a native desktop experience for Google Calendar.

---

**TÜRKÇE**

## Genel Bakış
Bu proje, Google Takvim'i Linux'ta erişilebilir bir masaüstü uygulaması olarak sunar. Electron ile oluşturulmuştur ve `.deb` ile `.AppImage` formatlarını destekler.

## Kurulum

### Gereksinimler
- Linux (Ubuntu veya diğer Debian tabanlı dağıtımlar önerilir)
- Docker kurulu (inşa işlemi için)

### Adımlar
1. `dist/` klasöründen `.deb` veya `.AppImage` dosyasını indirin.
2. `.deb` dosyasını kurmak için şu komutu çalıştırın:

   ```bash
   sudo dpkg -i dist/gcalendar-linux_1.0.0_amd64.deb
   ```

3. `.AppImage` dosyasını çalıştırmak için çalıştırılabilir hale getirin ve şu komutu çalıştırın:

   ```bash
   chmod +x dist/Google\ Calendar-1.0.0.AppImage
   ./dist/Google\ Calendar-1.0.0.AppImage
   ```

## Kullanım
Kurulumdan sonra uygulamayı "Google Calendar" olarak uygulama menünüzde bulabilirsiniz. Açın ve Google Takvim'i masaüstü uygulaması olarak kullanmaya başlayın.

