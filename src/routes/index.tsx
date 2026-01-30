import { createFileRoute } from '@tanstack/react-router'
import { Container, Flex, Heading, Text, Button } from '@radix-ui/themes'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <Container size="2" py="9">
      <Flex direction="column" gap="4" align="center">
        <Heading size="9">Welcome</Heading>
        <Text size="4" color="gray">
          Your app is ready. Try switching font themes!
        </Text>
        <Button size="3">Get Started</Button>
      </Flex>
    </Container>
  )
}
