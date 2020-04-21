import { Paper, Tab, Tabs } from '@material-ui/core';
import { Description, InsertDriveFile } from '@material-ui/icons';
import React, { useState } from 'react';
import { AnsweredQuestions, UnansweredQuestions } from '../QuestionsList/QuestionsList';
import { TabPanel } from './TabPanel';

export const Home: React.FC = () => {
    const [value, setValue] = useState<number>(0);

    const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Paper variant="outlined" elevation={3}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
                variant="fullWidth"
            >
                <Tab
                    icon={<InsertDriveFile />}
                    label="Unanswered Questions" />
                <Tab
                    icon={<Description />}
                    label="Answered Questions" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <UnansweredQuestions />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AnsweredQuestions />
            </TabPanel>
        </Paper>
    )
}
