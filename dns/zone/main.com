$TTL 2h

@       IN      SOA     main.com.  hostmaster.main.com. (
                        2024012600  ; Serial
                        12h         ; Refresh
                        15m         ; Retry
                        3w          ; Expire
                        2d          ; Minimum ttl
                        )

        IN      NS      main.com.
@       IN      A       127.0.0.1
www     IN      A       127.0.0.1