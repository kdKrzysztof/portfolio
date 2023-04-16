import type { ListInterface } from '@/types';
import type { FC } from 'react';
import { Typography, Grid, List, ListItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const ListComponent: FC<ListInterface> = ({ array }) => {
  return (
    <List sx={{ listStyleType: 'disc', pl: '1.65rem', pb: '0rem', color: '#00ADB5' }}>
      <>
        {array.map((el) => {
          const uniqueKey = uuidv4();
          return (
            <ListItem
              key={uniqueKey}
              sx={{ display: 'list-item', pl: '.5rem', pt: '0rem', pb: '0.5rem' }}>
              {el.Title !== '' ? (
                <Typography
                  key={uniqueKey + '-title'}
                  variant="subtitle2"
                  color="white"
                  fontWeight="bold">
                  {el.Title}
                </Typography>
              ) : null}

              {el.Desc !== '' ? (
                <Typography key={uniqueKey + '-desc'} variant="subtitle2" color="white">
                  {el.Desc}
                </Typography>
              ) : null}
            </ListItem>
          );
        })}
      </>
    </List>
  );
};

export default ListComponent;
