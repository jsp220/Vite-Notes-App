import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { NewNote } from "./NewNote"

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/" element={<h1>Hi</h1>} />

      </Routes>
    </Container>
  )
}

export default App
