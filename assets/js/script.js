 
        const contactModal = document.getElementById('contact-us');
        const submitBtn = document.getElementById('contact-btn');
        const closeButton = document.getElementById('close-button');
        const backdrop =document.getElementById('backdrop')
  

            submitBtn.addEventListener('click', () => {
                contactModal.style.display = 'block';
                backdrop.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });

            closeButton.addEventListener('click', () => {
                // Close the dialog modal
                contactModal.style.display = 'none'
                backdrop.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
  


        