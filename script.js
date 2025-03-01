const calc = document.querySelector('.calc');
const result = document.getElementById('result');

calc.addEventListener('click', function (event) {
    
    if (!event.target.classList.contains('calc_btn')) return;

    const value = event.target.innerText;

    switch (value) {
        case 'C': 
            result.innerText = '';
            break;

        case '=':
            try {
                
                if (result.innerText.trim() === '') return;
                result.innerText = eval(result.innerText.replace(/[^-()\d/*+.]/g, '')).toFixed(2);
            } catch (error) {
                result.innerText = 'Ошибка';
            }
            break;

        default:
            
            const lastChar = result.innerText.slice(-1);
            if (['+', '-', '*', '/'].includes(value)) {
                if (['+', '-', '*', '/'].includes(lastChar)) {
                    return;
                }
            }

            if (value === '.') {
                const lastNumber = result.innerText.split(/[\+\-\*\/]/).pop();
                if (lastNumber.includes('.')) {
                    return;
                }
            }

            result.innerText += value;
            break;
    }
});