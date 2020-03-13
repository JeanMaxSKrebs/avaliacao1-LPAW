// Resposta: Não, apenas com sombreamento, pois utilizamos a sombra como um quadrado
contexto.save()
contexto.shadowColor= '#BEBEBE'
contexto.shadowOffsetX= 100
contexto.fillRect(110, 110, 100, 100);
contexto.restore()