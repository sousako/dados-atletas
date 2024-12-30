class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // categoria do atleta
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    // calcular o IMC
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    //  calcular a média válida das notas
    calculaMediaValida() {
        // Filtra notas válidas 
        const notasValidas = this.notas.filter(nota => nota >= 7);
        
        // Calcula a média se houver notas válidas
        if (notasValidas.length === 0) {
            return 0; // Retorna 0 se não houver notas válidas
        }
        
        const soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasValidas.length;
    }

    // obter os atributos do atleta
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}


