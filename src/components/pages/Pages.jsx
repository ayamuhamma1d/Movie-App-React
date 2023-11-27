import { Box, Container } from "@mui/material";
import React from "react";
import useGetTrending from "../../hooks/useGetTrending";
import { useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from './../movies/card'
import Loader from "../loader/Loader";
import hero from"./../../assets/images/wallpaperflare.com_wallpaper (3).jpg"

const Pages = (props) => {
    const { sx, ...other } = props;
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => { setPage(value); };
    const [allTrending, loading, error] = useGetTrending('all', page);
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);
    return (
        <Loader loading={loading} error={error}>
              <div className="">
        <img src={hero} alt="" />
      </div>
            <div className='container'>
                <h3 className="header">Latest Movies & TV Shows</h3>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        borderRadius: 2,
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        
                    }}>
                    {allTrending.map((trend) => (
                        <Card trend={trend} />
                    ))}

                </Box>
                <Stack container spacing={2}  alignItems="center" justifyContent={'center'}>
                    <Pagination count={20} page={page} onChange={handleChange} />
                </Stack>
            </div>
        </Loader>
    );
};
export default Pages;
