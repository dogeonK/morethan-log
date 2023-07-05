import Script from "next/script"
import { CONFIG } from "site.config"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleAnalytics?.enable === true && (
      <>
        <script src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.config.measurementId}`} />
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${CONFIG.googleAnalytics.config.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </script>
      </>
    )}
  </>
)

export default Scripts
