import React, {useEffect} from 'react';
import {skeletonClientProvider} from "./skeletonClientProvider";
import {debugLog} from "./debugLog";


export const skeleton = function (TheComponent, fetchFn, cache) {
    // cache is disabled
    if (typeof cache !== "number" ||cache <= 0) {
        debugLog('INVALID_CACHE_VALUE')
        return true;
    }


    const Skeleton = function (props) {
        useEffect(() => {
            // refetch skeleton on client when server fetch skeleton error
            skeletonClientProvider(fetchFn)
        }, []);

        return <TheComponent {...props}/>
    }

    Skeleton.skeleton = fetchFn;
    Skeleton.skeleton.cache = cache;

    return Skeleton;
}
