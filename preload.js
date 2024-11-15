window.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
      const sidePanel = document.querySelector('.Kk7lMc-DWWcKd-OomVLb-haAclf');
      if (sidePanel) {
        sidePanel.style.display = 'none';
      }
  
      const button = document.querySelector('.DWWcKd-OomVLb-LgbsSe-Bz112c-haAclf');
      if (button) {
        button.style.display = 'none';
      }
  
      const hideSidePanelButton = document.querySelector('[aria-label="Hide side panel"]');
      if (hideSidePanelButton) {
        hideSidePanelButton.style.display = 'none';
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  });