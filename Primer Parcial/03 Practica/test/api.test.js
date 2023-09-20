const request = require('supertest');
const { app, equipo } = require('../index');
const server = require('../server');

describe('GET /equipo', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('Debe consultar y devolver un array de equipos', async () => {
    // Arrange: No se requieren preparaciones especiales
    
    // Act
    const response = await request(app).get('/equipo');
    
    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe('POST /equipo', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO);
  });

  afterAll((done) => {
    server.close(done);
  });

  beforeEach(() => {
    equipo.length = 0;
  });

  it('Debería agregar un nuevo equipo', async () => {
    // Arrange
    const body = {
      id: "1",
      nombre: "Agila FC",
      fundacion: "19/9/2023",
      campeonatos: "5",
      país: "Ecuador"
    };

    // Act
    const response = await request(app).post('/equipo').send(body);

    // Assert
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: 'Guardado equipo',
      body
    });

    expect(equipo).toHaveLength(1);
    expect(equipo[0]).toEqual(body);
  });
});

describe('DELETE /equipo/:id', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO);
  });

  afterAll((done) => {
    server.close(done);
  });

  beforeEach(() => {
    equipo.length = 0;
  });

  it('debería eliminar un equipo existente', async () => {
    // Arrange
    const equipoEjemplo = {
      id: "1",
      nombre: "Agila FC",
      fundacion: "19/9/2023",
      campeonatos: "5",
      país: "Ecuador"
    };
    equipo.push(equipoEjemplo);

    // Act
    const response = await request(app).delete(`/equipo/${equipoEjemplo.id}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Ha sido eliminado el Equipo'
    });

    expect(equipo).toHaveLength(1); // El equipo debería haberse eliminado
  });
});
