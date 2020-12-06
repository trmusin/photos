import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkMU from '@material-ui/core/Link';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import styles from "./styles.module.scss";


export default ({history, clear, remove})=> {

    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const removeSelected =()=> remove(checked);

    return (
        <div className={styles.container}>
            <div className={styles.options}>
                <Button onClick={()=> removeSelected()}>Удалить выбранные</Button>
                <Button onClick={()=>clear()}>Очистить</Button>
            </div>
            <div className={styles.list}>
                <List>
                    {history.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem key={value.search} role={undefined} dense>
                                <ListItemIcon onClick={handleToggle(value.search)}>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value.search) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <Link href={"/search/[id]"} as={`/search/${value.search}`} passHref>
                                    <LinkMU component="a" color="textPrimary" >
                                        {`${value.search} - (${value.total})`}
                                    </LinkMU>
                                </Link>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="comments" onClick={()=> remove([value.search])}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </div>
    );
}