function FindProxyForURL(url, host)
{
  var proxy = null;

  if      (false) { /* do nothing */ }
  // START_DCI_MAPPINGS
  else if (shExpMatch(url, "*10.9.12.186/*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*10.0.2.116*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*10.50.2.132*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*10.9.12.211/*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*186.diversecomputing.net/*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*ospadfstest.diversecomputing.net/*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*dcilocal.com/*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*buildhq.diversecomputing.net*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*.diversecomputing.net*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*.eagentcjis.com/*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*hqx2*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*aleadev*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*aleatest*")) { proxy = "SOCKS localhost:9999"; }
  else if (shExpMatch(url, "*mpdconline*")) { proxy = "SOCKS localhost:9999"; }
  // END_DCI_MAPPINGS

// NCJIS
  else if (shExpMatch(url, "*10.14*")) { proxy = "SOCKS localhost:9090"; }
  else if (shExpMatch(url, "*nccisunisys.com*")) { proxy = "SOCKS localhost:9090"; }

// NLETS
  else if (shExpMatch(url, "*164.154.*")) { proxy = "SOCKS localhost:9990"; }
  else if (shExpMatch(url, "*sd.gov*")) { proxy = "SOCKS localhost:9990"; }




  // START_CATCH_ALL_MAPPINGS
  else            { proxy = "DIRECT"; }
  // END_CATCH_ALL_MAPPINGS

  // If the proxy is null for whatever reason, map it to DIRECT instead.
  if (proxy == null) { proxy = "DIRECT"; }

  // The proxy returned by this method is split by the semicolon character and evaluated in order until the website is
  // succesfully resolved. For example, returning "SOCKS localhost:9999; DIRECT" will cause the browser to first attempt
  // to resolve the website using "SOCKS localhost:9999", using "DIRECT" as a fallback.
  if (!proxy.endsWith("DIRECT")) {
    if   (proxy.length > 0) { proxy = proxy + "; DIRECT"; }
    else                    { proxy = "DIRECT"; }
  }

  return proxy;
}
