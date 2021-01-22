import AppsIcon from '@material-ui/icons/Apps';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CloudIcon from '@material-ui/icons/Cloud';
import ExtensionIcon from '@material-ui/icons/Extension'
import ControlCameraIcon from '@material-ui/icons/ControlCamera'
const IconHelper = (label) => {
    switch (label) {
        case 'AssessmentIcon':
            return <AssessmentIcon />
        case 'CloudIcon':
            return <CloudIcon />
        case 'ExtensionIcon':
            return <ExtensionIcon />
        case 'AppsIcon':
            return <AppsIcon />    
        default:
            return <ControlCameraIcon />
    }
}
export {IconHelper}