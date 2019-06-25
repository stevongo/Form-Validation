(function(window,document){
    window.onload = function(){
        'use strict';
        function checkInputText(el) {
            if(el.value.trim() === '') {
                var label = createEl('label',el.name.capitalize() + ' darf nicht leer sein');
                label.className = 'error';
                // el.parentElement.appendChild(label);
                el.parentElement.insertBefore(label,el.nextElementSibling);
            }
        }

        function removeErrors() {
            var error = document.getElementsByClassName('error');
            /* div.errorMsg ausblenden */
            var errorMsg = document.getElementsByClassName('errorMsg')[0];
            errorMsg.style.visibility = 'hidden';
            while(error.length) {
                error[0].remove();
            }
        }

        /* Erster Fehler im div.errorMsg anzeigen */
        function showFirstError() {
            var error = document.getElementsByClassName('error');
            var errorMsg = document.getElementsByClassName('errorMsg')[0];
            if(error.length) {
                errorMsg.style.visibility = 'visible';
                errorMsg.innerHTML = '<span>' + error[0].innerHTML + '</span>';
            }            
        }

        document.forms[0].onsubmit = function(e){
            e.preventDefault();
            var f = e.target;
            removeErrors();
            checkInputText(f.vorname);
            checkInputText(f.nachname);
            if(!isChecked(f.geschlecht)) {
                var label = createEl('label',f.geschlecht[0].name.capitalize() + ' darf nicht leer sein');
                label.className = 'error';
                f.geschlecht[0].parentElement.appendChild(label);
            }

            var sprache = document.getElementById('lieblingssprache').getElementsByTagName('input');
  
            if(!isChecked(sprache)) {
                var label = createEl('label',sprache[0].parentElement.id.capitalize() + ' darf nicht leer sein');
                label.className = 'error';
                sprache[0].parentElement.appendChild(label);
            }

            if(f.sprache.selectedIndex === 0) {
                var label = createEl('label',f.sprache.name.capitalize() + ' darf nicht leer sein');
                label.className = 'error';
                f.sprache.parentElement.appendChild(label);
            }

            if(!f.agb.checked) {
                var label = createEl('label',f.agb.name.capitalize() + ' darf nicht leer sein');
                label.className = 'error';
                f.agb.parentElement.appendChild(label);
            }

            showFirstError();
        }

    };
}(window, document));
