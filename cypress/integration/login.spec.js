/// <reference types="cypress" />



context('Funcionalidade login', () => {


    it('Deve fazer login com sucesso', () => {
        cy.visit('https://crm-dev.zaz.vc/login')
        cy.get('[startadornment="[object Object]"] > .MuiInputBase-root > .MuiInputBase-input').type('mauricio.figueiredo@zaz.vc')
        cy.get('[style="margin-top: 20px; margin-bottom: 20px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Teste789@')
        cy.get('.MuiButton-label').click()
        cy.get('[style="display: flex; flex-direction: row; align-items: center;"] > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.sc-lcepkR > :nth-child(2) > :nth-child(2)').click()
        cy.get(`[data-value="${Math.floor(Math.random() * 6) + 1}"]`).click()

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function generateName() {
            var first_name = ["abandoned", "able", "absolute", "adorable"];

            var last_name = ["people", "history", "way", "art", "world"];

            var name = first_name[Math.floor(Math.random() * first_name.length) + 1]
            return name
        }
        cy.get(':nth-child(1) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(generateName())

        let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
        let number_random = (number) => (Math.round(Math.random() * number));
        let mod = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));

        function cpf() {
            let total_array = 9;
            let n = 9;
            let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

            let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
            d1 = 11 - (mod(d1, 11));
            if (d1 >= 10) d1 = 0;

            let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
            d2 = 11 - (mod(d2, 11));
            if (d2 >= 10) d2 = 0;


            return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
        }
        function gera() {

            return cpf()
        }
        cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(gera())

        function dataFormatada() {
            let x = Math.floor((Math.random() * 28) + 1);
            let y = Math.floor((Math.random() * 12) + 1);
            let z = Math.floor((Math.random() * (2004 - 1932 + 1)) + 1932);
            return x.toLocaleString("pt-BR", {minimumIntegerDigits: 2}) + "/" + y.toLocaleString("pt-BR", {minimumIntegerDigits: 2})+ "/" + z;
        }

        cy.get(':nth-child(2) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(dataFormatada())


    })

})