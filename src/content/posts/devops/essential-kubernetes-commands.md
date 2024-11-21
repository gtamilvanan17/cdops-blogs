---
title: Essential Kubernetes Commands (kubectl)
published: 2024-11-01
description: 'Most essential kubernetes commands that helps every DevOps Guy.'
image: '../assets/devops/kubernetes/essential-kubernetes-commands.png'
tags: [kubernetes]
category: 'DevOps'
draft: true
lang: ''
---

# Most essential kubernetes commands that helps every DevOps people.

Essential Kubernetes commands are key to managing clusters and workloads. Common commands include `kubectl get` (to view resources), `kubectl apply` (to apply configurations), and `kubectl delete` (to remove resources). These commands help in deploying, troubleshooting, and scaling applications within Kubernetes environments.

Sure! Here's the plain text version:

1. `kubectl get pods --all-namespaces`: Check the status of all pods across namespaces to identify failures.
2. `kubectl describe pod pod_name`: Gather detailed information about a failed pod.
3. `kubectl logs pod_name -c container_name`: View logs of a specific container inside a pod to troubleshoot issues.
4. `kubectl get events --all-namespaces --sort-by='.metadata.creationTimestamp'`: Review recent events for clues on crashes and errors.
5. `kubectl get nodes`: Verify the status of nodes in the cluster, checking for node failures.
6. `kubectl drain node_name --ignore-daemonsets`: Safely evacuate and cordon a node for recovery operations.
7. `kubectl cordon node_name`: Mark a node as unschedulable to prevent new pods from being scheduled during recovery.
8. `kubectl delete pod pod_name --grace-period=0 --force`: Forcefully delete a crashed pod to restart it or clear it for recovery.
9. `kubectl rollout undo deployment deployment_name`: Roll back a deployment in case a new rollout causes crashes.
10. `kubectl exec -it pod_name -- /bin/sh`: Access a container to debug and resolve application issues directly inside the pod.
11. `kubectl get componentstatuses`: Check the health of core cluster components like etcd, kube-apiserver, and more.
12. `kubectl top nodes`: Monitor node resource usage to detect resource exhaustion causing crashes.
13. `kubectl top pods --all-namespaces`: Check pod resource usage across namespaces, identifying bottlenecks leading to crashes.
14. `kubectl delete node node_name`: Remove a failed node from the cluster to allow recovery operations.
15. `etcdctl --endpoints=https://etcd-server:2379 snapshot restore backup.db`: Restore etcd from a snapshot in case of etcd failure.
16. `kubectl apply -f backup.yaml`: Reapply configurations from a backup manifest during recovery.
17. `kubectl taint nodes node_name key=value:NoSchedule`: Prevent scheduling on a node experiencing issues during recovery.
18. `kubectl get endpoints service_name`: Verify service endpoints during recovery to ensure services are resolving correctly.

<br>

:::note[Conclusion]
This is it! Kubernetes commands like `kubectl get`, `apply`, and `delete` are vital for managing, deploying, and scaling workloads effectively. Make use of it. If you have any doubts/issues/errors with the above contents, `feel free to contact me`. Cheers, Happy learning.
:::