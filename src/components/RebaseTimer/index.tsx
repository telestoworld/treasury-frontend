import { useSelector } from "react-redux";
import { secondsUntilBlock, prettifySeconds } from "../../helpers";
import { Box } from "@material-ui/core";
import "./rebasetimer.scss";
import { Skeleton } from "@material-ui/lab";
import { useMemo } from "react";
import { IReduxState } from "../../store/slices/state.interface";

function RebaseTimer() {
    const currentBlockTelesto = useSelector<IReduxState, number>(state => {
        return state.app.currentBlockTelesto;
    });

    const nextRebase = useSelector<IReduxState, number>(state => {
        return state.app.nextRebase;
    });

    const timeUntilRebase = useMemo(() => {
        if (currentBlockTelesto && nextRebase) {
            const seconds = secondsUntilBlock(currentBlockTelesto, nextRebase);
            return prettifySeconds(seconds);
        }
    }, [currentBlockTelesto, nextRebase]);

    return (
        <Box className="rebase-timer">
            <p>
                {currentBlockTelesto ? (
                    timeUntilRebase ? (
                        <>
                            <strong>{timeUntilRebase}</strong> to Next Rebase
                        </>
                    ) : (
                        <strong>Rebasing</strong>
                    )
                ) : (
                    <Skeleton width="200px" />
                )}
            </p>
        </Box>
    );
}

export default RebaseTimer;
