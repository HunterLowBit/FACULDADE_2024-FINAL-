// O arquivo main.dart é o ponto de entrada do programa
// Aqui vamos criar uma lista de objetos do tipo Livro
void main() {

  // criar uma lista de objetos Livro
  var livros = [

    // Criar um objeto Livro e passar os valores
    // para as propriedades titulo, autor, genero e idioma
    Livro("O Pequeno Ladrão de Redes", "ASG_HELP", "Livro de Programação", "Java"),

    // Criar outro objeto Livro e passar os valores
    Livro("A Ilha do Doutor Moreau", "H. G. Wells", "Ficção Científica", "Inglês"),

    // Criar mais um objeto Livro e passar os valores
    Livro("O Senhor dos Aneis", "J. R. R. Tolkien", "Fantasia", "Inglês"),
  ];

  // Percorrer a lista de objetos Livro e imprimir o titulo de cada livro
  livros.forEach((livro) {
    print(livro.titulo);
  });

  // Imprimir os dados de cada livro
  livros.forEach((livro) {
    livro.exibirDetalhes();
  });
}

// Definir a classe Livro com as propriedades titulo, autor, genero e idioma
// e o método exibirDetalhes() para imprimir os dados do livro
class Livro {
  String titulo;
  String autor;
  String genero;
  String idioma;

  // Construtor da classe Livro
  // recebe os valores para as propriedades titulo, autor, genero e idioma
  Livro(this.titulo, this.autor, this.genero, this.idioma);

  // Criar um método para imprimir os dados do livro
  void exibirDetalhes() {
    print("Título: $titulo");
    print("Autor: $autor");
    print("Gênero: $genero");
    print("Idioma: $idioma");
  }
}


