void main() {
  
  bool ehPalindromo(String s) {
    s = s.toLowerCase();
    return s == s.split('').reversed.join();
  }

  print(ehPalindromo('Cadastro'));  

}


