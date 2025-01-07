// AppRouter.js
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from "./page/dashboard";
import LabourRegistration from './page/labour-registration/labourRegistration';

import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './page/login';

const AppRouter = () => {
    const { isAuthenticated } = useAuth();
    // alert(isAuthenticated)
    return (

        <Router>
            <Routes>
                <Route path="/"
                    element={<Dashboard />}
                />
                <Route path="/labour-registration"
                    element={<LabourRegistration />}
                />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
        // <AuthProvider>
        //     <Router>
        //         <Routes>
        //             <Route path="/"
        //                 element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        //             />
        //             <Route path="/labour-registration"
        //                 element={isAuthenticated ? <LabourRegistration /> : <Navigate to="/login" />}
        //             />
        //             <Route path="/login" element={<LoginPage />} />
        //         </Routes>
        //     </Router>
        // </AuthProvider>
    );
};

export default AppRouter;
