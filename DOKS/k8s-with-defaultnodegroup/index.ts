import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";
import * as kubernetes from "@pulumi/kubernetes";

export const k8s_version = "1.15.9-do.2" ;

const cluster = new digitalocean.KubernetesCluster("demo-cluster", {
    region: digitalocean.Regions.SFO2,
    version: k8s_version,

    nodePool: {
        name: "worker-pool",
        nodeCount: 1,
        size: "s-2vcpu-2gb",
    },
});
