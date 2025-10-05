const dados = [
  {
    "indicador": "População",
    "ano": 2017,
    "localidade": "Brusque",
    "valor": 128818
  },
  {
    "indicador": "População",
    "ano": 2019,
    "localidade": "Brusque",
    "valor": 134079
  },
  {
    "indicador": "População",
    "ano": 2021,
    "localidade": "Brusque",
    "valor": 140597
  },
  {
    "indicador": "População",
    "ano": 2023,
    "localidade": "Brusque",
    "valor": 141385
  },
  {
    "indicador": "População",
    "ano": 2017,
    "localidade": "Santa Catarina",
    "valor": 6984749
  },
  {
    "indicador": "População",
    "ano": 2019,
    "localidade": "Santa Catarina",
    "valor": 7164788
  },
  {
    "indicador": "População",
    "ano": 2021,
    "localidade": "Santa Catarina",
    "valor": 7338473
  },
  {
    "indicador": "População",
    "ano": 2023,
    "localidade": "Santa Catarina",
    "valor": 7504322
  },
  {
    "indicador": "População",
    "ano": 2017,
    "localidade": "Brasil",
    "valor": 206804741
  },
  {
    "indicador": "População",
    "ano": 2019,
    "localidade": "Brasil",
    "valor": 210147125
  },
  {
    "indicador": "População",
    "ano": 2021,
    "localidade": "Brasil",
    "valor": 213317639
  },
  {
    "indicador": "População",
    "ano": 2023,
    "localidade": "Brasil",
    "valor": 216284269
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2017,
    "localidade": "Brusque",
    "valor": 14
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2019,
    "localidade": "Brusque",
    "valor": 14.99
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2021,
    "localidade": "Brusque",
    "valor": 14.63
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2023,
    "localidade": "Brusque",
    "valor": 13.42
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2017,
    "localidade": "Santa Catarina",
    "valor": 14.05
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2019,
    "localidade": "Santa Catarina",
    "valor": 13.68
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2021,
    "localidade": "Santa Catarina",
    "valor": 13.15
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2023,
    "localidade": "Santa Catarina",
    "valor": 12.21
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2017,
    "localidade": "Brasil",
    "valor": 14.08
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2019,
    "localidade": "Brasil",
    "valor": 13.56
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2021,
    "localidade": "Brasil",
    "valor": 12.55
  },
  {
    "indicador": "Taxa de natalidade (‰)",
    "ano": 2023,
    "localidade": "Brasil",
    "valor": 11.98
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2017,
    "localidade": "Brusque",
    "valor": 79.4
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2019,
    "localidade": "Brusque",
    "valor": 77
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2021,
    "localidade": "Brusque",
    "valor": 74.96
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2023,
    "localidade": "Brusque",
    "valor": 78
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2017,
    "localidade": "Santa Catarina",
    "valor": 79.4
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2019,
    "localidade": "Santa Catarina",
    "valor": 79.9
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2021,
    "localidade": "Santa Catarina",
    "valor": 74.91
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2023,
    "localidade": "Santa Catarina",
    "valor": 76.4
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2017,
    "localidade": "Brasil",
    "valor": 76
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2019,
    "localidade": "Brasil",
    "valor": 76.6
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2021,
    "localidade": "Brasil",
    "valor": 77
  },
  {
    "indicador": "Expectativa de vida (anos)",
    "ano": 2023,
    "localidade": "Brasil",
    "valor": 76.4
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2017,
    "localidade": "Brusque",
    "valor": 3.8
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2019,
    "localidade": "Brusque",
    "valor": 3.8
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2021,
    "localidade": "Brusque",
    "valor": 1.9
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2023,
    "localidade": "Brusque",
    "valor": 1.8
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2017,
    "localidade": "Santa Catarina",
    "valor": 2.67
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2019,
    "localidade": "Santa Catarina",
    "valor": 2.3
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2021,
    "localidade": "Santa Catarina",
    "valor": 1.9
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2023,
    "localidade": "Santa Catarina",
    "valor": 1.9
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2017,
    "localidade": "Brasil",
    "valor": 7
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2019,
    "localidade": "Brasil",
    "valor": 6.1
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2021,
    "localidade": "Brasil",
    "valor": 5.6
  },
  {
    "indicador": "Taxa de analfabetismo (%)",
    "ano": 2023,
    "localidade": "Brasil",
    "valor": 5.6
  }
]
