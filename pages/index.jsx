import Head from "next/head";
import { Jumbotron, Container, Row, Card, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid={true}>
      <Head>
        <title>Projeto Conhecer para Proteger</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container fluid={true}>
        <Jumbotron fluid={true}>
          <Container>
            <h1>Conhecer para Proteger</h1>
            <p>
              Teste seu conhecimento em um de nossos questionários e veja como
              você se sai.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 01</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://docs.google.com/forms/d/1lFi9nXHdB8RuUnlr9OY5WSK-QGnFB-vlbFrJ9WlhxNs/viewform?edit_requested=true">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 02</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://docs.google.com/forms/d/1lFi9nXHdB8RuUnlr9OY5WSK-QGnFB-vlbFrJ9WlhxNs/viewform?edit_requested=true">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 03</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://docs.google.com/forms/d/1lFi9nXHdB8RuUnlr9OY5WSK-QGnFB-vlbFrJ9WlhxNs/viewform?edit_requested=true">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 04</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                 <Button variant="primary" target="_blank" href="https://docs.google.com/forms/d/1lFi9nXHdB8RuUnlr9OY5WSK-QGnFB-vlbFrJ9WlhxNs/viewform?edit_requested=true">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 05</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                 <Button variant="primary" target="_blank" href="https://docs.google.com/forms/d/1lFi9nXHdB8RuUnlr9OY5WSK-QGnFB-vlbFrJ9WlhxNs/viewform?edit_requested=true">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 06</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/learn">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 07</Card.Title>
                <Card.Text>
                Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/vercel/next.js/tree/master/examples"
                >
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 08</Card.Title>
                <Card.Text>
                  Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                 <Button variant="primary" target="_blank" href="https://docs.google.com/forms/d/1lFi9nXHdB8RuUnlr9OY5WSK-QGnFB-vlbFrJ9WlhxNs/viewform?edit_requested=true">
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Questionário 09</Card.Title>
                <Card.Text>
                Este questionário é somente um teste, a plataforma encontra-se em construção.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                >
                  Começar &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto sem fins lucrativos{" "}
          <img src="/jh.png" alt="jh Logo" width={80} height={60} />
        </a>
      </footer>
    </Container>
  );
}
