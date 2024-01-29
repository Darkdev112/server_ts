$TTL 2h

@       IN      SOA     ns.secondary.com. hostmaster.secondary.com. (
                        2024012600  ; Serial
                        12h         ; Refresh
                        15m         ; Retry
                        3w          ; Expire
                        2d          ; Minimum ttl
                        )

        IN      NS      ns.secondary.com.
        
ns      IN      A       127.0.0.1