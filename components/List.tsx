import type { ListInterface } from '@/types';
import type { FC } from 'react';
import { Typography, Grid, List, ListItem } from '@mui/material';

const ListComponent: FC<ListInterface> = ({ array }) => {
  return (
    <List sx={{ listStyleType: 'disc', pl: '1.65rem', pb: '0rem', color: '#00ADB5' }}>
      <>
        {array.map((el) => {
          return (
            <ListItem
              key={el.Title}
              sx={{ display: 'list-item', pl: '.5rem', pt: '0rem', pb: '0.5rem' }}>
                
              {el.Title !== '' ? (
                <Typography key={el.Title} variant="subtitle2" color="white" fontWeight="bold">
                  {el.Title}
                </Typography>
              ) : null}

              {el.Desc !== '' ? (
                <Typography key={el.Title} variant="subtitle2" color="white">
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
