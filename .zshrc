export PATH="$HOME/.local/bin:$PATH"
export PATH=/opt/homebrew/opt/openjdk@21/bin:$PATH
export PATH=$(brew --prefix python)/libexec/bin:$PATH
export JAVA_HOME=/opt/homebrew/opt/openjdk@21

# The following lines have been added by Docker Desktop to enable Docker CLI completions.
fpath=(/Users/terskine/.docker/completions $fpath)
autoload -Uz compinit
(( ${+_comps[docker]} )) || compinit
# End of Docker CLI completions

alias dvpn_hq="/Users/terskine/Projects/docker-vpn/projects/dci/dci-vpn connect"
alias dvpn_nlets="/Users/terskine/Projects/docker-vpn/projects/sddci/sddci-vpn connect"
alias socks_ncjis="ssh -N -f -D 9090 ncjis-jump"

netowlui() {
  if [[ -z "$1" ]]; then
    echo "usage: netowlui <ssh-host>" >&2
    return 1
  fi
  local p=$((RANDOM % 50000 + 10000))
  ssh -f -N -o ExitOnForwardFailure=yes -L ${p}:localhost:8090 "$1" && open -a "Google Chrome" "http://localhost:$p/app/index.html#table"
}
alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
