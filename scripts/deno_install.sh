#!/bin/sh
# Deno installation script.
deno_install="${DENO_INSTALL:-$HOME/.deno}"
curl -fsLS "https://deno.land/install.sh" | sh

if command -v bash &> /dev/null
then
	printf "\n# Set by deno install script\nexport DENO_INSTALL=\"$deno_install\"\nexport PATH=\"\$DENO_INSTALL/bin:\$PATH\"\n" >> $HOME/.bashrc
fi

if command -v zsh &> /dev/null
then
	printf "\n# Set by deno install script\nexport DENO_INSTALL=\"$deno_install\"\nexport PATH=\"\$DENO_INSTALL/bin:\$PATH\"\n" >> $HOME/.zshrc
fi
