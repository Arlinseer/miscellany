#!/bin/sh
# Post-installation script for Void.

echo "===========[Post-installation script for Void]==========="
echo "This post-installation script is adapted for glibc Void!"
echo "Executing this script on musl Void may require changes."

echo "[*]: Preparing for installation..."
echo "+) Updating xbps..."
echo "- Setting temporary variables..."
fastly="https://repo-fastly.voidlinux.org"
echo "- Updating xbps..."
xbps-install -Suy xbps -R "$fastly/current"
echo "+) Installing xmirror..."
xbps-install -uy xmirror -R "$fastly/current"
echo "+) Setting mirror to Fastly CDN..."
xmirror -s "$fastly"
echo "- Unsetting variables..."
unset fastly
echo "+) Performing full system update..."
xbps-install -Suy

echo "[*]: Installing low-level packages..."
echo "+) Installing audio and video packages..."
xbps-install -y pipewire alsa-pipewire alsa-utils xorg-minimal \
	xorg-input-drivers xorg-video-drivers noto-fonts-ttf \
	noto-fonts-cjk noto-fonts-emoji font-hermit-otf
echo "+) Installing networking and fetching utilities..."
xbps-install -y NetworkManager curl wget
echo "+) Installing elogind..."
xbps-install -y elogind
echo "+) Installing archive compression/extraction utilities..."
xbps-install -y zip unzip xz
echo "+) Installing system utilities..."
xbps-install -y htop tmux hdparm nload
echo "+) Installing 'hacking' tools..."
xbps-install -y bvi

echo "[*]: Installing applications..."
echo "+) Installing desktop environment..."
xbps-install -y xfce4 arc-theme
echo "+) Installing several desktop applications..."
xbps-install -y firefox torbrowser-launcher vlc gimp rhythmbox qbittorrent
echo "+) Installing gnupg and git..."
xbps-install -y gnupg git
echo "+) Installing octoxbps (xbps frontend)..."
xbps-install -y octoxbps
echo "+) Installing vim (text editor)..."
xbps-install -y vim
echo "+) Installing go (Go development tool)..."
xbps-install -y go
echo "+) Installing github-cli (GitHub CLI app)..."
xbps-install -y github-cli

echo "[*]: Cleaning up after installation..."
echo "+) Setting up alsa and pipewire..."
mkdir -p /etc/alsa/conf.d
ln -s /usr/share/alsa/alsa.conf.d/50-pipewire.conf /etc/alsa/conf.d
ln -s /usr/share/alsa/alsa.conf.d/99-pipewire-default.conf /etc/alsa/conf.d
ln -s /usr/share/applications/pipewire.desktop /etc/xdg/autostart
ln -s /usr/share/applications/pipewire-pulse.desktop /etc/xdg/autostart
echo "+) Setting up NetworkManager and dbus..."
echo "- Setting temporary variables..."
rsv="/etc/runit/runsvdir/default"
echo "- Setting up services..."
rm -rf "$rsv/dhcpcd"
rm -rf "$rsv/wpa_supplicant"
ln -s /etc/sv/dbus "$rsv/"
ln -s /etc/sv/NetworkManager "$rsv/"
echo "- Unsetting variables..."
unset rsv
echo "+) Setting up octoxbps-notifier..."
ln -s /usr/share/applications/octoxbps-notifier.desktop /etc/xdg/autostart

echo "Post-installation script has finished all tasks."
