import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BasicTabProps {
    data:{
        children?: React.ReactNode;
        nameTab: string;
        iconOnTab?: React.ReactElement;
        value: number;
    }[]
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: BasicTabProps) {
  const {data} = props;    
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="">
            {data.map(item => (
                <Tab key={item.value} icon={item.iconOnTab} iconPosition="start" label={item.nameTab} {...a11yProps(item.value)} />
            ))}
        </Tabs>
      </Box>
      {data.map(item => (
        <TabPanel key={item.value} value={value} index={item.value}>
            {item.children}
        </TabPanel>
      ))}
    </Box>
  );
}