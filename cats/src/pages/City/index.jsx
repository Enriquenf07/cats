import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, Stack, Grid, Typography, Card, Box, List, Divider, IconButton } from "@mui/material"

export default function City() {
    return (
        <Grid xs={11}>
            <Stack direction={"column"} >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        SHOP
                    </AccordionSummary>
                    <AccordionDetails>
                        oi
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        BAR
                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Grid>
    )
}