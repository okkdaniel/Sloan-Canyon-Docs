(function() {
    function trackVisit() {
      const visits = JSON.parse(localStorage.getItem('siteVisits') || '[]');
      const newVisit = {
        timestamp: new Date().toISOString(),
        page: window.location.pathname
      };
      visits.push(newVisit);
      localStorage.setItem('siteVisits', JSON.stringify(visits));
    }
  
    function downloadLog() {
      const visits = JSON.parse(localStorage.getItem('siteVisits') || '[]');
      const logContent = visits.map(visit => `${visit.timestamp},${visit.page}`).join('\n');
      const blob = new Blob([logContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'site_visits.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  
    // Track visit on page load
    trackVisit();
  
    // Add download button to the page
    document.addEventListener('DOMContentLoaded', function() {
      const button = document.createElement('button');
      button.textContent = 'Download Visit Log';
      button.style.position = 'fixed';
      button.style.bottom = '10px';
      button.style.right = '10px';
      button.style.zIndex = '1000';
      button.addEventListener('click', downloadLog);
      document.body.appendChild(button);
    });
  
    // Use Docusaurus lifecycle to handle route changes
    if (window.siteConfig && window.siteConfig.customFields) {
      window.siteConfig.customFields.onRouteUpdate = function() {
        trackVisit();
      };
    }
  })();