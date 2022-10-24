module.export - {
  bail: true, //se um teste falhar, o teste é parado.
  coverage: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js"//padrão dos arquivos de testes, dentro de qq pasta, partindo da raiz/src.
  ],
};