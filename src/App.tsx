import { Button, Container, Title } from '@mantine/core';
import { useState } from 'react';

/**
 * Root application component.
 * @returns {JSX.Element} App markup.
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <Container py="xl">
      <Title order={1}>Sabine Rommevaux-Tani</Title>
      <Button mt="md" onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>
    </Container>
  );
}

export default App;
