import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tag } from "./App";
import { NoteList } from "./components/NoteList";

export type HomeProps = {
  availableTags: Tag[]
}

export default function Home({ availableTags }: HomeProps) {
  return <>
    <Row>
      <Col><h1>Notes</h1></Col>
      <Col xs="auto">
        <Stack gap={2} direction="horizontal">
          <Link to="/new">
            <Button variant="primary">Create</Button>
          </Link>
          <Button variant="outline-secondary">Edit Tags</Button>
        </Stack>
      </Col>
    </Row>
    <NoteList availableTags={availableTags}/>
  </>
}