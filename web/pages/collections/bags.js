import Head from "next/head";

//Sanity.io
import client from "../../client";
import urlFor from "../../imageUrlBuilder";

//Bootstrap
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bags = (props) => {
  const { products = [] } = props;

  return (
    <div>
      <Head>
        <title>OJOS | Bags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Bags</h1>
      <Container fluid="lg">
        <Row>
          {products.length ? (
            products.map((product) => (
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className="product-section">
                  <a href={"/products/" + product.slug.current}>
                    <Image
                      className="products"
                      fluid
                      src={urlFor(product.image).quality(100).url()}
                    />
                  </a>
                </div>
                <div className="product-description">
                  <a href="/products/:id" className="product-name">
                    {product.title}
                  </a>
                  <a href="/products/:id" className="product-price">
                    {product.price}
                  </a>
                </div>
              </Col>
            ))
          ) : (
            <div className="no-products-msg">
              <p>No products right now, check back later!</p>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

Bags.getInitialProps = async () => ({
  products: await client.fetch(`
    *[_type == "product" && category->title == "Bags"]|order(_createdAt desc){title, price, slug, image}
  `),
});

export default Bags;
