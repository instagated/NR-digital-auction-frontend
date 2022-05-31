import React, { useEffect, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch,useSelector } from 'react-redux'
import { getSettings, updateSettings } from '../../Redux/Actions/settings'
import { Container, Typography,FormControl, TextField, Button, MenuItem } from '@material-ui/core'

const Settings = () => {
  const dispatch = useDispatch()
  const allSettings = useSelector(({settings}) => settings.all)
  useEffect(() => {
    dispatch(getSettings())
  }, [])
  const [formArgs, setFormArgs] = useState({
    DisplayName: "",
    Currency:"$",
    Logo:""
  })

  useEffect(() => {
    if(allSettings){
      setFormArgs({
        DisplayName: allSettings.DisplayName,
        Currency:allSettings.Currency,
        Logo:allSettings.Logo
      })
    }
  }, [allSettings])

  const {DisplayName,Currency,Logo} = formArgs

  const currencies = [
    {
      value: '$',
      label: '$',
    },
    {
      value: '€',
      label: '€',
    },
    {
      value: '₹',
      label: '₹',
    },
    {
      value: '¥',
      label: '¥',
    },
  ]

  const handleChange = (event) => {
    setFormArgs({...formArgs, [event.target.name]: event.target.value});
  }

  const formHandle = (event) => {
    event.preventDefault()
    try {
      dispatch(updateSettings(formArgs))
    } catch (error) {
      console(error)
    }
  }
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Settings
        </Typography>
        <form className="settings" noValidate autoComplete="off" onSubmit={e => formHandle(e)}>
          <FormControl margin="dense" fullWidth>
            <TextField label="Display Name" defaultValue={DisplayName} name="DisplayName" onChange={handleChange} />
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <TextField select label="Currency" name="Currency" value={Currency} onChange={handleChange}>
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <TextField label="Logo URL" name="Logo" value={Logo} onChange={handleChange} />
          </FormControl>
          <Button variant="contained" type="submit" color="primary">Update</Button>
        </form>
      </Container>
    </Fragment>
  )
}

Settings.propTypes = {
  settings: PropTypes.object,
}

export default Settings
