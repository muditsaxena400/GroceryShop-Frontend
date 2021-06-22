import React,{ Component } from 'react'
import { viewAllBookingHistory } from '../Service/ViewAllBookingHIstoryService'
import RenderBookingHistory from '../Components/RenderBookingHistoryForAdmin'
import AdminNavbar from './AdminNavbar'
import InputBase from '@material-ui/core/InputBase'
import { fade,withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'; 

const styles = (theme) => ({
    search: { 
   
        position: 'relative',
        border: '1px',
        borderStyle:'solid',
        borderColor: 'grey',
        borderRadius: '5px',
        backgroundColor: fade(theme.palette.common.white, 0.85),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.55),
        },
        marginRight: theme.spacing(2),
        marginLeft:  theme.spacing(2),
        width: '450%',
        height:'40px',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '500px',
        },
        marginTop:'20px',
        marginBottom:'5px',
        left: '28%',
        elevation:'5',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 5,
        
      },
      searchIcon: {                                                     
        
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      inputRoot: {                                                      
        color: 'inherit',
      },
      inputInput: {                                                    
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '50ch',
        },
      },
    
})
class ViewAllBookingHistory extends Component {

    constructor() {
        super()
        this.state = {
            searchInput: "",
            bookingHistory: [],
            selectedBookingHistory:[]
            }
    }

    componentDidMount() {
        viewAllBookingHistory().then((res) => {
            this.setState ({bookingHistory: res})
        })
         
    }

    updateSearch = (event) => {

        let updatedList;

        updatedList = this.state.bookingHistory.filter(product => {
            if(product.loginId.toLowerCase().includes(event.target.value.toLowerCase())){
                
                return product;
            }
            else{
                return null
            }
        })
        this.setState({
            selectedBookingHistory: updatedList
        })
    }

    buttonStyle={
        height: 150 
      }
    render()
    {
       let renderBookingHistory
       const classes  = this.props.classes;
       if(this.state.selectedBookingHistory.length>0)
       {
           renderBookingHistory = <div>
               {this.state.selectedBookingHistory.map((product, index) => {
                return (
                    <div>
                        <RenderBookingHistory product={product} key={index}/> 
                    </div>)
                })}
            </div>
       }
       else
       {
        renderBookingHistory = <div>
            {this.state.bookingHistory.map((product,index) => {
            return (
                <div>
                    <RenderBookingHistory product={product} index={index}/> 
                </div>)
            })}
        </div>
       }

        return(
            <div
            style = {{
                backgroundImage:
                    "url(https://image.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    height: "400vh",
                    opacity: 0.9, 
              }}
            >
            <div style={this.buttonStyle}>
                <AdminNavbar/>
                <div>
                    <div className={classes.search} >                               
            <div className={classes.searchIcon}>
              <SearchIcon  position="absolute" />
            </div>
            <InputBase
              placeholder="Search…your Product"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,  
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.updateSearch}
            />
          </div>
    </div>
              <div style={{marginBottom:"30px", height:"50px"}}/>
                <div>
                    {renderBookingHistory}                 
                </div>   
            </div>
            </div>
        )
    }
}

export default withStyles(styles)(ViewAllBookingHistory)