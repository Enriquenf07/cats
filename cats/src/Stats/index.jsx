import { Paper, Stack, Typography, Card, Box, List, Divider, IconButton, Grid } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useStore from "../Store/useStore";
import AddIcon from '@mui/icons-material/Add';
import numberF from "../utils/numberF";
import { toast } from "react-toastify";

function SimpleCard({ item, section }) {
    return (
        <>
            {item.initialCond &&
                <Card elevation={5} sx={{ borderRadius: '0.5rem', backgroundColor: section.color, width: 'justifyContent' }}>
                    <Stack padding={'0.6rem'} direction={"row"} sx={{ width: 'justifyContent' }}>
                        <Typography sx={{ color: '#0e1111', width: 'justifyContent' }}>{item.title}: {item.value}</Typography>
                    </Stack>
                </Card>}
        </>
    )
}

function SkillCard({ item, section }) {
    return (
        <>
            {item.initialCond &&
                <Card elevation={5} sx={{ borderRadius: '0.5rem', backgroundColor: section.color, width: 'justifyContent' }}>
                    <Stack padding={'0.6rem'} direction={"row"} alignItems={"center"}>
                        <Typography sx={{ color: '#0e1111', width: 'justifyContent' }}>{item.title}: {item.value}</Typography>
                        <IconButton sx={{color: '#0e1111'}} size="small" onClick={item.handleClick}>
                            <AddIcon fontSize="inherit"/>
                        </IconButton>
                    </Stack>
                </Card>}
        </>
    )
}

export default function Stats() {
    const state = useStore()

    const items = [
        {
            id: 'item0',
            title: 'RATS',
            value: numberF(state.rats),
            initialCond: state.playAround > 5
        }
    ]

    const account = [
        {
            id: 'account0',
            title: 'GOLD',
            value: numberF(state.gold),
            initialCond: state.playAround > 5
        }
    ]

    const skills = [
        {
            id: 'skills0',
            title: 'HUNTING',
            value: state.hunting,
            initialCond: state.playAround > 5,
            handleClick: () => {
                try{
                    state.upgradeHunting()
                }catch(e){
                    toast.error(e.message)
                }
            }
        }
    ]

    const sections = [
        {
            id: 'section0',
            title: 'ITEMS',
            values: items,
            color: '#CF9FFF'
        },
        {
            id: 'section1',
            title: 'ACCOUNT',
            values: account,
            color: '#FFD700'
        },
        {
            id: 'section2',
            title: 'SKILLS',
            values: skills,
            color: '#c6d3e3'
        }
    ]


    return (
        <Grid xs={11}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >

                </AccordionSummary>
                <AccordionDetails>
                    {sections.map(section => {
                        return (
                            <div key={section.id}>
                                <Divider >{section.title}</Divider>
                                <Stack sx={{ width: '93vw' }} direction={"row"} spacing={'0.4rem'}>
                                    {section.values.map((i) => {
                                        return section.id == 'section2' ? <SkillCard key={i.id} item={i} section={section} /> : <SimpleCard key={i.id} item={i} section={section} />
                                    })}
                                </Stack>
                            </div>
                        )
                    })}

                </AccordionDetails>
            </Accordion>

        </Grid>
    )
}