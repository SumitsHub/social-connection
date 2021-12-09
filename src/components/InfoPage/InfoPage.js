import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";

const guidelines = [
  "- Please use above buttons to navigate between sections.",
  "- Add person to database using ADD PERSON section.",
  "- There are few people already present by default, can also be used.",
  "- Except these few people, all people added manually will exist till page refresh.",
  "- Add friendship between to person using ADD FRIEND and selection appropriate person.",
  "- There are no friendship relations defined by default, should be added manually.",
  "- All friendships will also be available till page refresh.",
  "- Find degree of separation using FIND CONNECTION by selecting two person.",
  "- There might be any scenario which can result an error, please refresh in that case."
];

const InfoPage = () => {
  return (
    <Container>
      <Box>
        <h1>Hello, Welcome!</h1>
        <b>This app will find Degree Of Separation!</b>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ maxWidth: "80%", margin:"0 auto" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Please find general description for better experience:
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guidelines.map((row) => (
                <TableRow
                  key={row}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default InfoPage;
